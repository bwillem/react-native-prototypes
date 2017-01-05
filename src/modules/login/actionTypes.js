// Convention is we keep action types in a separate file
// so they're guaranteed to be the same between actions
// and reducers. They're also namespaced to the module
export const USERNAME_INPUT = 'login/username_input';
export const PASSWORD_INPUT = 'login/password_input';
export const LOGIN_USER_BEGIN = 'login/login_user_begin';
export const LOGIN_USER_SUCCESS = 'login/login_user_success';
export const LOGIN_USER_FAIL = 'login/login_user_fail';
export const EMAIL_ERROR = 'login/email_error';
