/** 主题切换方法 */
import { generate } from '@ant-design/colors';

/**
 * 切换主题色
 * @param color 颜色值
 * @param dark 是否暗黑模式
 */
export function changeColor(color?: string | null, dark?: boolean) {
  const $html = document.documentElement;
  if (!$html) {
    return;
  }
  const id = 'ele-theme-var';
  const elem = document.getElementById(id);
  if (elem?.parentNode) {
    elem.parentNode.removeChild(elem);
  }
  if (color) {
    const colors = generate(color, dark ? { theme: 'dark' } : {});
    const selector = dark ? 'html.dark' : ':root';
    const elem = document.createElement('style');
    elem.id = id;
    elem.setAttribute('type', 'text/css');
    elem.innerHTML = [
      `${selector}{`,
      `--el-color-primary:${color};`,
      `--el-color-primary-light-3:${colors[4]};`,
      `--el-color-primary-light-5:${colors[3]};`,
      `--el-color-primary-light-7:${colors[2]};`,
      `--el-color-primary-light-8:${colors[1]};`,
      `--el-color-primary-light-9:${colors[0]};`,
      `--el-color-primary-dark-2:${colors[6]};`,
      '}'
    ].join('');
    document.head.appendChild(elem);
    $html.dataset.color = color;
  } else {
    $html.removeAttribute('data-color');
  }
  if (dark) {
    $html.classList.add('dark');
  } else {
    $html.classList.remove('dark');
  }
}
