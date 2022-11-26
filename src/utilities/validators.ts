export const required = (str: string) => str ? undefined : 'Required data!';
export const maxValue = (value: number) => (str: string | undefined) => str && (str.length <= value ? undefined : `Max length of string is ${value}!`);