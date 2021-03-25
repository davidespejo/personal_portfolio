export default interface RouteElement {
    name: string;
    path: string;
    component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
    inMenu: boolean;
};
