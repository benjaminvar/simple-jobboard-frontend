import Auth  from "./auth"
export default function prepareRouteAuthGuard(router, store) {
    return function (to, from, next) {
        let auth = new Auth(store);
        if (to.meta.auth === true || to.meta.guest === true) {
            //Check if the user if logged
            auth.check()
                .then(() => {
                    //if the user is logged and the route flag guest is set true redirect to home
                    if(to.meta.guest === true)
                    {
                        router.push({path:"/"});
                    }
                    //if the user is logged and the route flag is auth let it pass.
                    if(to.meta.auth === true)
                    {

                        next();
                    }
                    
                })
                .catch(() => {
                    store.dispatch("logout").then(

                        ()=>{
                            //if the user is not logged and the route flag guest is set true let it pass.
                            if(to.meta.guest === true)
                            {
                                next();
                            }
                             //if the user is not logged and the route flag auth is set true redirect to login page with intended route.
                            if(to.meta.auth === true)
                            {
                                router.push({ name: "login", params: { intended: to } });
                            }
                            

                        }
                    );
                });

        }else{
            next();
        }
        
    }
}