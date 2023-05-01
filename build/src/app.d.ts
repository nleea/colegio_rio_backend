import { Application } from "express";
export declare class App {
    app: Application;
    port: number | string;
    constructor();
    middlewares(): void;
    routes(): void;
    server(): void;
}
//# sourceMappingURL=app.d.ts.map