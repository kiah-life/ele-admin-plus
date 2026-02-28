import { ElStepInstance } from '../ele-app/el';
import { StepItem } from './types';

declare function __VLS_template(): Partial<Record<string, (_: {
    index: number;
    item: StepItem;
}) => any>>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    items: import('vue').PropType<StepItem[] | import('./types').StepItemsFunction>;
    type: import('vue').PropType<import('./types').StepType>;
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
}>, {
    reloadOptions: () => void;
    stepsRef: import('vue').Ref<ElStepInstance, ElStepInstance>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    items: import('vue').PropType<StepItem[] | import('./types').StepItemsFunction>;
    type: import('vue').PropType<import('./types').StepType>;
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
}>> & Readonly<{}>, {
    direction: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "horizontal" | "vertical", unknown>;
    space: import('element-plus/es/utils/index').EpPropMergeType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    active: number;
    finishStatus: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "error" | "success" | "wait" | "finish" | "process", unknown>;
    processStatus: import('element-plus/es/utils/index').EpPropMergeType<StringConstructor, "error" | "success" | "wait" | "finish" | "process", unknown>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
