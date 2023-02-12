export enum SelectedPage{
    Accueil ="accueil",
    Bénéfices= "bénéfices",
    Noscours="noscours",
    Contact="contact"
  }
  
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}