export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormActionResult {
  success: boolean;
  message?: string;
}
