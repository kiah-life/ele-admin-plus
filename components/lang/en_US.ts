/** 英语 */
import type { EleLocale } from '../ele-config-provider/types';

const localeValues: EleLocale = {
  cropper: {
    zoomIn: 'ZoomIn',
    zoomOut: 'ZoomOut',
    rotateLeft: 'RotateLeft',
    rotateRight: 'RotateRight',
    moveLeft: 'MoveLeft',
    moveRight: 'MoveRight',
    moveUp: 'MoveUp',
    moveDown: 'MoveDown',
    flipX: 'FlipX',
    flipY: 'FlipY',
    reset: 'Reset',
    upload: 'Upload',
    ok: 'OK',
    title: 'Cropper'
  },
  fileList: {
    selectAll: 'SelectAll',
    selectTips: 'Selected {total} file/directory',
    fileName: 'Name',
    fileSize: 'Size',
    fileTimestamp: 'LastModified'
  },
  map: {
    title: 'Address',
    placeholder: 'Enter keyword',
    message: 'Please select an address',
    ok: 'OK',
    clickMessage: 'Please click on the map'
  },
  table: {
    refresh: 'Refresh',
    sizes: 'Density',
    columns: 'Columns',
    maximized: 'Fullscreen',
    export: 'Export',
    print: 'Print',
    sizeLarge: 'Large',
    sizeDefault: 'Default',
    sizeSmall: 'Compact',
    columnTitle: 'Check all',
    columnReset: 'Reset',
    columnUntitled: 'Untitled',
    columnIndex: 'Index',
    columnExpand: 'Expand',
    columnFixedLeft: 'Pin to left',
    columnFixedRight: 'Pin to right',
    columnWidth: 'Width',
    exportOk: 'Ok',
    exportCancel: 'Cancel',
    exportFileName: 'Filename',
    exportFileNamePlaceholder: 'Please input filename',
    exportSelectData: 'Data',
    exportSelectColumn: 'Columns',
    exportDataTypePage: 'Current',
    exportDataTypeSelected: 'Selected',
    exportDataTypeAll: 'All',
    exportOther: 'Options',
    exportOtherHeader: 'Header',
    exportOtherFooter: 'Footer',
    exportOtherTreeIndex: 'Tree index'
  },
  copyable: {
    copy: 'Copy',
    copied: 'Copied'
  },
  upload: {
    uploading: 'Uploading',
    exception: 'Exception',
    retry: 'Retry',
    remove: 'Remove',
    preview: 'View',
    edit: 'Edit'
  },
  tour: {
    skip: 'Skip',
    prev: 'Previous',
    next: 'Next',
    finish: 'Finish'
  }
};

export default localeValues;
