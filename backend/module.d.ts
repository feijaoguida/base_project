declare namespace NodeJs {
    export interface ProcessEnv {
        DATABASE_URL: string;
        expires: string;
        expiresRefreshToken: string;
        jwtSecretKey: string;
        jwtRefreshTokenKey: string;
    }
}