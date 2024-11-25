import {Platform} from 'react-native';
import dayjs from 'dayjs';

export const isOS = () => Platform.OS === 'ios';

export const isAndroid = () => Platform.OS === 'android';

export const isArray = (obj: any) => obj instanceof Array;

export const numericNumOnly = (text: string): string => {
  return text.replace(/[^0-9]/g, '');
};
export const numericOnly = (text: string): string => {
  const sanitizedText = text.replace(/[^0-9]/g, '');
  const firstDigit = sanitizedText.charAt(0);
  if (sanitizedText.length > 0 && !['6', '7', '8', '9'].includes(firstDigit)) {
    return sanitizedText.substr(1);
  }
  return sanitizedText;
};

export const alphabetsOnly = (text: string): string => {
  return text.replace(/[^a-zA-Z\u0B80-\u0BFF\s]/g, '');
};

export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};
export const alphabetnumericOnly = (text: string): string => {
  return text.replace(/[^a-zA-Z0-9\s]/g, '');
};
export const alphabetNumericSpecialOnly = (text: string): string => {
  return text.replace(/[^a-zA-Z0-9\-_\/\\]/g, '');
};

export const appendBase64PrefixForImage = (base64: string) =>
  String(base64).length > 200
    ? `data:image/png/jpg/jpeg;base64,${base64}`
    : base64;

export const maskEmail = (email: string) => {
  let maskedEmail = '';
  try {
    const parts = email.split('@');
    const username = parts[0];
    const domain = parts[1];
    const maskedUsername = username.charAt(0);
    const maskedCharacters = '*'.repeat(username.length - 2);
    const lastFourCharacters = username.slice(-4);
    maskedEmail = `${maskedUsername}${maskedCharacters}${lastFourCharacters}@${domain}`;
    return maskedEmail;
  } catch (e) {
    return '';
  }
};

export const MIN_YEAR = new Date(1945, 0, 1);
