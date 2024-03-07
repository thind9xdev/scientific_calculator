
export const rad = (degree: number) => {
    return degree * (Math.PI / 180);
  };

 export function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  export const formattedNumber = (num: number) => {
    if (isNaN(num)) {
      return 0;
    }
    const numberFormat = new Intl.NumberFormat("en-US").format(num);
    return numberFormat;
  };