use swc_core::{
    ecma::ast::Program,
    plugin::{plugin_transform, proxies::TransformPluginProgramMetadata},
    transform_common::output::experimental_emit,
};

#[plugin_transform]
pub fn process(program: Program, _metadata: TransformPluginProgramMetadata) -> Program {
    experimental_emit("test".into(), "test".into());

    program
}
