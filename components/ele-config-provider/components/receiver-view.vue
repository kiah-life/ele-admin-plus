<template>
  <EleWatermark
    :wrapPosition="false"
    :style="!wrapPosition || authenticated ? void 0 : { position: 'relative' }"
    :disabled="authenticated"
    :content="watermark"
  >
    <slot :authenticated="authenticated"></slot>
  </EleWatermark>
</template>

<script lang="ts" setup>
  import { ref, computed, watch } from 'vue';
  import EleWatermark from '../../ele-watermark/index.vue';
  import { useReceiver } from '../receiver';
  const VERSION_NAME = '1.3';

  defineOptions({ name: 'ReceiverView' });

  defineProps({
    wrapPosition: {
      type: Boolean,
      default: true
    }
  });

  function decodeCode(encrypt: string): string {
    const format = (encrypt: string, length: number, offset: number) => {
      const content = ((array, offset) => {
        const max = array.length - offset;
        if (max <= 0) {
          return array;
        }
        const result = new Array(array.length);
        for (let i = 0; i < array.length; i++) {
          if (i < offset) {
            result[i] = array[max + i];
          } else {
            result[i] = array[i - offset];
          }
        }
        return result;
      })(encrypt.split(''), offset).join('');
      const sb: string[] = [];
      let start = 0;
      while (start < content.length) {
        let end = start + length;
        if (end > content.length) {
          end = content.length;
        }
        const item = content.substring(start, end);
        sb.push(item.split('').reverse().join(''));
        start = end;
      }
      return sb.join('');
    };
    const KEY_ENCRYPT =
      'BAFEDIHGLKJONMRQPUTSXWVaZYdcbgfejihmlkponsrqvutyxw10z432765+98/C';
    const index = encrypt.indexOf('=');
    const body = index === -1 ? encrypt : encrypt.substring(0, index);
    const suffix = index === -1 ? '' : encrypt.substring(index);
    const temp = format(body, 12, 3) + suffix;
    const input = temp.replace(/[^A-Za-z0-9\+\/\=]/g, '');
    const KEYS = format(KEY_ENCRYPT, 3, 1) + '=';
    let output = '';
    let chr1: number, chr2: number, chr3: number;
    let enc1: number, enc2: number, enc3: number, enc4: number;
    let i = 0;
    while (i < input.length) {
      enc1 = KEYS.indexOf(input.charAt(i++));
      enc2 = KEYS.indexOf(input.charAt(i++));
      enc3 = KEYS.indexOf(input.charAt(i++));
      enc4 = KEYS.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = ((utftext) => {
      let string = '';
      let i = 0;
      let c = 0;
      let c2 = 0;
      let c3 = 0;
      while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if (c > 191 && c < 224) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode(
            ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
          );
          i += 3;
        }
      }
      return string;
    })(output);
    return output;
  }

  const TIP_TEXT = 'EleAdminPlus需要授权使用,请前往eleadmin.com购买授权';

  const watermark = TIP_TEXT.split(',');

  function printError(v?: string, e?: number, d?: string, h?: string) {
    const divider = new Array(60).join('*');
    const tips = [divider];
    tips.push(TIP_TEXT);
    if (v == null && e == null && d == null && h == null) {
      tips.push('请先配置自己的授权码;');
    }
    if (!v && e == null && !d) {
      tips.push('请使用正确格式的授权码;');
    }
    if (v) {
      tips.push(
        `授权版本号不匹配, 授权码版本: ${v}, 安装版本: ${VERSION_NAME};`
      );
    }
    if (typeof e === 'number') {
      const date = new Date(e * 1000).toLocaleString();
      tips.push(`授权已失效, 到期时间: ${date};`);
    }
    if (d) {
      tips.push(`域名不匹配, 请部署在: ${d} 下, 当前域名: ${h};`);
    }
    tips.push(divider);
    console.error(tips.join('\n'));
  }

  const globalConfig = useReceiver();

  const authenticated = ref<boolean>(false);

  const license = computed<string | undefined>(() => {
    const code = globalConfig.license;
    return code ? code.trim() : void 0;
  });

  watch(
    license,
    (code) => {
      if (typeof code !== 'string' || !code) {
        authenticated.value = false;
        printError();
        return;
      }
      try {
        const certificate = JSON.parse(decodeCode(code));
        const { version, expiration, domain, product: name } = certificate;
        if (version && version !== VERSION_NAME) {
          authenticated.value = false;
          printError(version);
          return;
        }
        if ('EleAdminPlus' !== name) {
          authenticated.value = false;
          printError('');
          return;
        }
        if (expiration && expiration < Date.now() / 1000) {
          authenticated.value = false;
          printError(void 0, expiration);
          return;
        }
        if (domain) {
          const hostname = window?.location?.hostname;
          if (!hostname) {
            authenticated.value = false;
            printError(void 0, void 0, domain, '');
            return;
          }
          if ('localhost' !== hostname && '127.0.0.1' !== hostname) {
            const t1 = domain.split('.');
            const t2 = hostname.split('.');
            for (let i = t1.length - 1; i >= 0; i--) {
              if (t1[i] !== t2[i]) {
                authenticated.value = false;
                printError(void 0, void 0, domain, hostname);
                return;
              }
            }
            if (
              t2.length > t1.length &&
              t2[t2.length - t1.length - 1] !== 'www'
            ) {
              authenticated.value = false;
              printError(void 0, void 0, domain, hostname);
              return;
            }
          }
        }
      } catch (e) {
        authenticated.value = false;
        console.error(e);
        printError('');
        return;
      }
      authenticated.value = true;
    },
    {
      immediate: true
    }
  );
</script>
