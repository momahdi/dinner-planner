const Show={

    props:["hash"],

    data(){ return {counter:1}},
    mounted(){
        this.listener= e=> this.counter= this.counter+1;
        window.addEventListener("hashchange",this.listener);
    },
    render(h){              
        this.counter;  // mention to force re-render!
        return this.hash===window.location.hash? this.$slots.default : false;  
    }











    /*
    props:["hash"],
    data(){ return {windowHash:window.location.hash}},
    mounted(){
        this.listener= e=> this.windowHash= this.data
        window.addEventListener("hashchange",this.listener);
    },

    destroyed(){
        window.removeEventListener("hashchange",this.listener)
    },
    render(h){
        return h("div", {}, this.windowHash);
    }
    */
};
