/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  readdirSync,
  rmdirSync,
  statSync,
  existsSync,
  writeFileSync,
  readFileSync,
  rmSync,
  // eslint-disable-next-line no-unused-vars
  renameSync
} from 'node:fs';
import { join, extname, basename } from 'node:path';
import ts from 'typescript';
import { parse, compileScript } from '@vue/compiler-sfc';
import eslint from 'eslint';
const linter = new eslint.ESLint();

setup();

function setup() {
  //eachFiles('E:/WorkSpace/VSCodeSpace/ele-admin-plus-js/src');
  deleteEmptyDirectory('E:/WorkSpace/VSCodeSpace/ele-admin-plus-starter');
  //formatFile('E:/WorkSpace/VSCodeSpace/ele-admin-plus-js/src/App.vue');
}

/**
 * 递归处理文件
 * @param folder 目录
 */
export function eachFiles(folder: string) {
  const files = readdirSync(folder, { withFileTypes: true });
  files.forEach((file) => {
    const path = join(folder, file.name);
    if (file.isDirectory()) {
      if (file.name == 'model' || file.name == 'types') {
        rmSync(path);
      } else {
        eachFiles(path);
      }
    } else if (file.name.endsWith('.d.ts')) {
      rmSync(path);
    } else if (file.name.endsWith('.ts')) {
      const js = join(folder, basename(file.name, extname(file.name)) + '.js');
      processTsFile(path, js);
      //renameSync(path, js);
    } else if (file.name.endsWith('.vue')) {
      writeFileSync(path, processVue(path));
      //const code = readFileSync(path, 'utf-8');
      //writeFileSync(path, code.replace(/\slang="ts"/g, ''));
    }
  });
}

/**
 * 重命名并编译 ts 文件
 * @param path 文件路径
 * @param jsPath 输出路径
 */
export function processTsFile(path: string, jsPath: string) {
  const code = readFileSync(path, 'utf-8');
  rmSync(path);
  writeFileSync(jsPath, ts2js(code));
}

/**
 * 编译 vue 文件
 * @param path 文件路径
 */
export function processVue(path: string) {
  const code = readFileSync(path, 'utf-8');
  if (
    !code.includes('<script lang="ts" setup>') &&
    !code.includes('<script setup lang="ts">')
  ) {
    return code;
  }
  const content =
    '<script setup>\n' + ts2js(processScript(code)) + '\n</script>';
  //console.log('--------------vue---------------');
  return code
    .replace(/<script lang="ts" setup>[\s\S]*?<\/script>/, content)
    .replace(/<script setup lang="ts">[\s\S]*?<\/script>/, content);
}

/**
 * 编译 vue 文件的 script 部分
 * @param code 源代码
 */
export function processScript(code: string) {
  const { descriptor } = parse(code);
  let script = descriptor.scriptSetup?.content || '';
  if (script.includes('defineProps<{') || script.includes('defineEmits<{')) {
    const result = compileScript(descriptor, { id: descriptor.filename });
    if (script.includes('defineProps<{')) {
      const props = processProps(result.content);
      //console.log('--------------props---------------');
      //console.log(props);
      script = script
        .replace(/withDefaults\([\s\S]*?\);/, `defineProps(${props});`)
        .replace(/defineProps<\{[\s\S]*?\}>\(\);/, `defineProps(${props});`);
    }
    if (script.includes('defineEmits<{')) {
      const emits = processEmits(result.content);
      //console.log('--------------emits---------------');
      //console.log(emits);
      script = script.replace(
        /defineEmits<\{[\s\S]*?\}>\(\);/,
        `defineEmits(${emits});`
      );
    }
  }
  return script;
}

/**
 * 获取编译后的 props
 * @param content 编译后的内容
 */
export function processProps(content: string) {
  const str = content.match(/props: \{[\s\S]*?emits: \[/)?.[0] || '';
  return str.substring('props: '.length, str.lastIndexOf(','));
}

/**
 * 获取编译后的 emits
 * @param content 编译后的内容
 */
export function processEmits(content: string) {
  const str = content.match(/emits: \[[^\]]*?\],/)?.[0] || '';
  return str.substring('emits: '.length, str.lastIndexOf(','));
}

/**
 * ts 编译为 js
 * @param content 内容
 */
export function ts2js(content: string) {
  const result = ts.transpileModule(content, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ESNext,
      allowJs: true,
      noEmit: true,
      skipLibCheck: true,
      noEmitOnError: true,
      noImplicitUseStrict: true
    },
    reportDiagnostics: false
  });
  return result.outputText;
}

/**
 * 格式化文件
 * @param path 文件路径
 */
export async function formatFile(path: string) {
  const results = await linter.lintFiles([path]);
  console.log(results);
  await eslint.ESLint.outputFixes(results);
}

/**
 * 递归删除空目录
 * @param dir 路径
 */
export function deleteEmptyDirectory(dir: string) {
  if (dir.endsWith('/.git')) {
    return;
  }
  if (existsSync(dir)) {
    const files = readdirSync(dir);
    if (files.length === 0) {
      rmdirSync(dir);
      console.log(`Deleted empty directory: ${dir}`);
    } else {
      files.forEach((file) => {
        const filePath = `${dir}/${file}`;
        if (statSync(filePath).isDirectory()) {
          deleteEmptyDirectory(filePath);
        }
      });
      // 再次检查目录是否为空
      const remainingFiles = readdirSync(dir);
      if (remainingFiles.length === 0) {
        rmdirSync(dir);
        console.log(`Deleted empty directory: ${dir}`);
      }
    }
  }
}
