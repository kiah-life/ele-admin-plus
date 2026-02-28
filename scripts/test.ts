/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { writeFile, readFile } from 'node:fs/promises';
import { readdirSync, statSync } from 'node:fs';
//import { set as setValue, get as getValue } from 'lodash-es';
import { getValue } from 'ele-admin-plus/es/utils/core';

setup();

function setup() {
  const a = { b: [{ c: 1 }, { c: 2 }] };
  //setValue(a, 'b[0].c', 12);
  //console.log('result:', a);
  //console.log('get:', getValue(a, 'e.f.g'));
  console.log('get:', getValue(a, 'b.0.c'));
  console.log('get:', getValue(a, 'b[1].c'));
  //eachCodeFile('E:/WorkSpace/VSCodeSpace/ele-admin-plus/src');
  //eachCodeFile('E:/WorkSpace/VSCodeSpace/ele-admin-plus-ts/src');
  //eachCodeFile('E:/WorkSpace/VSCodeSpace/ele-admin-plus-js/src');
  //eachCodeFile('E:/WorkSpace/VSCodeSpace/ruoyi-ele-admin/src');
}

function eachCodeFile(path: string) {
  const stat = statSync(path);
  if (stat.isDirectory()) {
    const list = readdirSync(path);
    for (const item of list) {
      eachCodeFile(path + '/' + item);
    }
    return;
  }
  //updateRadioCode(path);
  updateCheckboxCode(path);
}

/**
 * 更新el-radio语法
 */
// eslint-disable-next-line no-unused-vars
async function updateRadioCode(path: string) {
  const content = await readFile(path, 'utf-8');
  if (!content.includes('<el-radio')) {
    return;
  }
  await writeFile(
    path,
    content
      .replace(/<el-radio-button[^-]*label="/g, (m) =>
        m.replace('label="', 'value="')
      )
      .replace(/<el-radio-button[^-]*<\/el-radio-button>/g, (m) =>
        m.replace('>', ' label="').replace('</el-radio-button>', '" />')
      )
      //
      .replace(/<el-radio[^-]*label="/g, (m) => m.replace('label="', 'value="'))
      .replace(/<el-radio[^-]*<\/el-radio>/g, (m) =>
        m.replace('>', ' label="').replace('</el-radio>', '" />')
      )
  );
}

/**
 * 更新el-checkbox语法
 */
// eslint-disable-next-line no-unused-vars
async function updateCheckboxCode(path: string) {
  const content = await readFile(path, 'utf-8');
  if (!content.includes('<el-checkbox')) {
    return;
  }
  await writeFile(
    path,
    content
      .replace(/<el-checkbox-button[^-]*label="/g, (m) =>
        m.replace('label="', 'value="')
      )
      .replace(/<el-checkbox-button[^-]*<\/el-checkbox-button>/g, (m) =>
        m.replace('>', ' label="').replace('</el-checkbox-button>', '" />')
      )
      //
      .replace(/<el-checkbox[^-]*label="/g, (m) =>
        m.replace('label="', 'value="')
      )
      .replace(/<el-checkbox[^-]*<\/el-checkbox>/g, (m) =>
        m.replace('>', ' label="').replace('</el-checkbox>', '" />')
      )
  );
}
