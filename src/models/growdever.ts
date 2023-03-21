import { v4 as uuidv4 } from 'uuid';

export class ValidationError extends Error {
  public statusCode = 400;

  constructor(msg?: string) {
    super(msg)
  }
}

const SKILLS_VALIDAS = ['Dedicado', 'Criativo', 'Pro-ativo'];

export class Growdever {
  private uuid: string;
  constructor(
    private name: string,
    private status : 'MATRICULADO' | 'ESTUDANDO' | 'FORMADO' = 'MATRICULADO',
    private skills : string[] = [],
  ) {
    this.setName(name)
    this.uuid = uuidv4()
  }

  getUuid(): string {
    return this.uuid;
  }

  getName(): string {
    return this.name;
  }

  setName(name : string){
    if (name.split(' ').length < 2) throw new ValidationError('Nome inválido');
    this.name = name;
  }
  getStatus(): 'MATRICULADO' | 'ESTUDANDO' | 'FORMADO' {
    return this.status;
  }

  getSkills(): string[] {
    return this.skills;
  }

  addSkills(skill:string): void {
    if(SKILLS_VALIDAS.map(i => i.toLowerCase()).includes(skill.toLowerCase())) {
      this.skills.push(skill);
    } else {
      const error = new ValidationError('Skill invalida')
      throw error;
    }
  }

  removeSkills(skill:string): void {
    if (!SKILLS_VALIDAS.includes(skill)) {
      throw new ValidationError('Skill não existe.');
    }
    if (this.skills.includes(skill)){
      const indexOf = this.skills.indexOf(skill);
      this.skills.splice(indexOf, 1);
    }
  }

}
