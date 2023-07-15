import { z } from "zod";

const RefreshTokenValidation = z.object({
    cookies: z.object({
        refreshToken: z.string({
            required_error: 'Refresh Token is required',
        }),
    }),
});

export default RefreshTokenValidation