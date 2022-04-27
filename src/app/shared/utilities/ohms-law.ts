interface Values {
    v?: number;
    a?: number;
    w?: number;
    o?: number;
}

export class ohmsLaw {
    static getV(values: Values): number {
        const {v, a, w, o} = values
        if (a && w) return w/a;
        if (o && a) return o*a;
        if (w && o) return Math.sqrt(w*o)
        if (v) return v;
        return 0
    }

    static getA(values: Values): number {
        const {v, a, w, o} = values
        if (v && w) return w/v;
        if (v && o) return v/o;
        if (w && o) return Math.sqrt(w/o)
        if (a) return a;
        return 0
    }

    static getW(values: Values): number {
        const {v, a, w, o} = values
        if (v && a) return v*a;
        if (v && o) return (v*v)/o;
        if (o && a) return o*(a*a);
        if (w) return w;
        return 0
    }

    static getO(values: Values): number {
        const {v, a, w, o} = values
        if (v && a) return v/a;
        if (v && w) return (v*v)/w;
        if (w && a) return w/(a*a)
        if (o) return o;
        return 0
    }
}