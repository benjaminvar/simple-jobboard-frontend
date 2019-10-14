export default {
    methods:{
        callNotification(notification,data = {})
        {
            return new Promise((resolve,reject) => {
                data["cb"] = value => {
                    resolve(value);
                };
                this[notification](data);
            });
        }
    }
}