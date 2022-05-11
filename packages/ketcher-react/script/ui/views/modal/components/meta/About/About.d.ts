export default About;
declare const About: import("react-redux").ConnectedComponent<typeof AboutDialog, import("react-redux").Omit<any, "date" | "onOk" | "indigoVersion" | "indigoMachine" | "feedbackLink" | "helpLink" | "lifeScienciesLink" | "version">>;
declare function AboutDialog(props: any): JSX.Element;
