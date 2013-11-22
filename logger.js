module.exports = {
    init: function(level){
        this.l = level || "error"; // default is only errors, or if .log is forced
        this.p = "[ubbmigrator]"; // prefix
        this.d = this.l.indexOf("debug") >= 0;
        this.i = this.l.indexOf("info") >= 0;
        this.w = this.l.indexOf("warn") >= 0;

        //rules
        this.i = this.d || this.i;
        this.w = this.d || this.w;
        this.e = this.d || this.e;

        if (!this.i)
            this.info = function(){};
        if (!this.w)
            this.warn = function(){};
        if (!this.d)
            this.debug = function(){};
        if (!this.e)
            this.error = function(){};

        return this;
    },
    // will always be there for you
    log: function(s){
            console.log(this.p + "[log] " + s);
    },
    error: function(s){
        if (this.e)
            console.log(this.p + "[error] " + s);
    },
    warn: function(s){
        if (this.w)
            console.log(this.p + "[warn] " + s);
    },
    info: function(s){
        if (this.i)
            console.log(this.p + "[info] " + s);
    },
    debug: function(s){
        if (this.d)
            console.log(this.p + "[debug] " + s);
    }
};