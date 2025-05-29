export interface Activity {
  title: string;
  list: {
    period: number;
    part?: string;
    admin?: string;
    date: string;
  }[];
}
