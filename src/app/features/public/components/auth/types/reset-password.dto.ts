export interface ResetPasswordDto {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
}
