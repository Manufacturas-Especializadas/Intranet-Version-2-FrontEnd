export type BirthdayPerson = {
  name: string;
  department: string;
  date: string;
  photo?: string;
};

export const birthdays: BirthdayPerson[] = [
  {
    name: "Ulises González",
    department: "Sistemas",
    date: "08 Julio",
    photo: "/birthdays/ulises-gonzalez.png",
  },
];

export const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
