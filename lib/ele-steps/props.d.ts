import { PropType, ExtractPropTypes } from 'vue';
import { StepType, StepItem, StepItemsFunction } from './types';

/**
 * 属性
 */
export declare const stepsProps: {
    /** 步骤条数据 */
    items: PropType<StepItem[] | StepItemsFunction>;
    /** 类型 */
    type: PropType<StepType>;
    space: import('element-plus/es/utils/index').EpPropFinalized<readonly [NumberConstructor, StringConstructor], unknown, unknown, "", boolean>;
    active: import('element-plus/es/utils/index').EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    direction: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "horizontal" | "vertical", unknown, "horizontal", boolean>;
    alignCenter: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    simple: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index').EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    finishStatus: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "wait" | "error" | "finish" | "success" | "process", unknown, "finish", boolean>;
    processStatus: import('element-plus/es/utils/index').EpPropFinalized<StringConstructor, "wait" | "error" | "finish" | "success" | "process", unknown, "process", boolean>;
};
export type StepsProps = ExtractPropTypes<typeof stepsProps>;
