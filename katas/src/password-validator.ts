export default function passwordValidator(password: string) {
    if (password.length < 8) return "Error: The password must have at least 8 characters";
    if (!hasUppercaseLetter(password)) return "Error: The password must have at least 1 uppercase letter";
    return true;
}

function hasUppercaseLetter(password: string) {
    return /.*[A-Z].*/.test(password);
}
