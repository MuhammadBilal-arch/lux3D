export const END_POINTS = {
    AUTH: {
        LOGIN: "auth/signin",
        REGISTER: "auth/signup",
        LOGOUT: "auth/logout"
    },
    ANALYTICS: {
        LAB: "lab/analytics",
        PROVIDER: "provider/analytics",
        PATIENT: "patient/analytics"
    },
    LAB: {
        PROVIDERS: "lab/providers/get",
        UPDATE_PROVIDER: "lab/providers/update",
    },
    REPORTS: {
        FORMAT: {
            DEFAULT:"report/format/",
            CREATE: "report/format/create",
            GET: "report/format/getall",
        },
        TEST: {
            DEFAULT: "report",
            CREATE: "report/create",
            UPDATE: "report/update",
            GET: "report/getall"
        }
    },
    PATIENTS:{
        DEFAULT:"patient"
    }
}