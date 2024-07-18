const today: Date = new Date();

const calculateAge = (birthDate: string) => {
  const birthYear: number = new Date(birthDate).getFullYear();
  const currentYear: number = today.getFullYear();
  const age: number = currentYear - birthYear;
  console.log("La edad de la persona es " + age + " años");
}

export { calculateAge };