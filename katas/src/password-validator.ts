export default function passwordValidator(password: string) {
    if (password.length < 8) return "Error: The password must have at least 8 characters";
    return true;
}
