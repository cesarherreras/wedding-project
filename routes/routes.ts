import formRouter from './formRouter';

function routerApi(app: any) {
    app.use('/form', formRouter);
}

export default routerApi;