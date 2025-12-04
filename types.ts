export interface Palette {
  name: string;
  colors: string[]; // Array of Hex codes
}

export interface MoodResponse {
  palette: string[];
  name: string;
}
