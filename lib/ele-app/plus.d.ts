import type EleAdminLayout from '../ele-admin-layout/index';
import type { BacktopProps } from '../ele-backtop/props';
import type EleBasicSelect from '../ele-basic-select/index';
import type { BreadcrumbProps } from '../ele-breadcrumb/props';
import type ReceiverView from '../ele-config-provider/components/receiver-view';
import type { CropperProps } from '../ele-cropper/props';
import type EleDataTable from '../ele-data-table/index';
import type { DataTableProps } from '../ele-data-table/props';
import type EleDropdown from '../ele-dropdown/index';
import type { DropdownProps } from '../ele-dropdown/props';
import type { FileListProps } from '../ele-file-list/props';
import type { ImageViewerProps } from '../ele-image-viewer/props';
import type { LoadingProps } from '../ele-loading/props';
import type EleMenus from '../ele-menus/index';
import type { MenusProps } from '../ele-menus/props';
import type { MenuItem } from '../ele-menus/types';
import type { ModalProps } from '../ele-modal/props';
import type { PaginationProps } from '../ele-pagination/props';
import type ElePopover from '../ele-popover/index';
import type { PopoverProps } from '../ele-popover/props';
import type { PrinterProps } from '../ele-printer/props';
import type EleProForm from '../ele-pro-form/index';
import type EleProTable from '../ele-pro-table/index';
import type { ProTableProps } from '../ele-pro-table/props';
import type { TableProps } from '../ele-table/props';
import type EleTabs from '../ele-tabs/index';
import type EleText from '../ele-text/index';
import type { TextProps } from '../ele-text/props';
import type EleTool from '../ele-tool/index';
import type { ToolProps } from '../ele-tool/props';
import type { ToolbarProps } from '../ele-toolbar/props';
import type EleTooltip from '../ele-tooltip/index';
import type { TooltipProps } from '../ele-tooltip/props';
import type EleUploadList from '../ele-upload-list/index';
import type { UploadListProps } from '../ele-upload-list/props';
import type EleVirtualTable from '../ele-virtual-table/index';
import type { ComponentProps } from './types';

/**
 * EleAdminLayout
 */
export type EleAdminLayoutInstance = InstanceType<typeof EleAdminLayout> | null;

/**
 * EleBacktop
 */
export type EleBacktopProps = ComponentProps<BacktopProps>;

/**
 * EleBasicSelect
 */
export type EleBasicSelectInstance = InstanceType<typeof EleBasicSelect> | null;

/**
 * EleBreadcrumb
 */
export type EleBreadcrumbProps = ComponentProps<BreadcrumbProps>;

/**
 * EleConfigProvider
 */
export type ReceiverViewInstance = InstanceType<typeof ReceiverView> | null;

/**
 * EleCropper
 */
export type EleCropperProps = ComponentProps<CropperProps>;

/**
 * EleDataTable
 */
export type EleDataTableInstance = InstanceType<typeof EleDataTable> | null;

export type EleDataTableProps = ComponentProps<DataTableProps>;

/**
 * EleDropdown
 */
export type EleDropdownInstance = InstanceType<typeof EleDropdown> | null;

export type EleDropdownProps = ComponentProps<DropdownProps>;

/**
 * EleFileList
 */
export type EleFileListProps = ComponentProps<FileListProps>;

/**
 * EleImageViewer
 */
export type EleImageViewerProps = ComponentProps<ImageViewerProps>;

/**
 * EleLoading
 */
export type EleLoadingProps = ComponentProps<LoadingProps>;

/**
 * EleMenus
 */
export type EleMenusInstance = InstanceType<typeof EleMenus> | null;

export type EleMenusProps = ComponentProps<MenusProps>;

export type EleMenuItemProps = Partial<MenuItem>;

/**
 * EleModal
 */
export type EleModalProps = ComponentProps<ModalProps>;

/**
 * ElePagination
 */
export type ElePaginationProps = ComponentProps<PaginationProps>;

/**
 * ElePopover
 */
export type ElePopoverInstance = InstanceType<typeof ElePopover> | null;

export type ElePopoverProps = Partial<PopoverProps>;

/**
 * ElePrinter
 */
export type ElePrinterProps = ComponentProps<PrinterProps>;

/**
 * EleProForm
 */
export type EleProFormInstance = InstanceType<typeof EleProForm> | null;

/**
 * EleProTable
 */
export type EleProTableInstance = InstanceType<typeof EleProTable> | null;

export type EleProTableProps = ComponentProps<ProTableProps>;

/**
 * EleTable
 */
export type EleTableProps = ComponentProps<TableProps>;

/**
 * EleTabs
 */
export type EleTabsInstance = InstanceType<typeof EleTabs> | null;

/**
 * EleText
 */
export type EleTextInstance = InstanceType<typeof EleText> | null;

export type EleTextProps = ComponentProps<TextProps>;

/**
 * EleTool
 */
export type EleToolInstance = InstanceType<typeof EleTool> | null;

export type EleToolProps = Partial<ToolProps>;

/**
 * EleToolbar
 */
export type EleToolbarProps = ComponentProps<ToolbarProps>;

/**
 * EleTooltip
 */
export type EleTooltipInstance = InstanceType<typeof EleTooltip> | null;

export type EleTooltipProps = Partial<TooltipProps>;

/**
 * EleUploadList
 */
export type EleUploadListInstance = InstanceType<typeof EleUploadList> | null;

export type EleUploadListProps = Partial<UploadListProps>;

/**
 * EleVirtualTable
 */
export type EleVirtualTableInstance = InstanceType<
  typeof EleVirtualTable
> | null;
