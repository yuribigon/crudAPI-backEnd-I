import { Growdever } from "../models/growdever";

let growdevers : Growdever[] = [
    new Growdever('Yuri Bigon'),
    new Growdever('Giovanna Lopes'),
    new Growdever('Sol LB'),
    new Growdever('Pipoca LB'),
    new Growdever('Arthur Pessoa'),
    new Growdever('Jonathan Spinelli'),
]

export const selectAllGrowdevers = () => growdevers;

export const insertGrowdever = (growdever: Growdever) => {
    try {
        growdevers.push(growdever);
        return growdever.getUuid();
    } catch (error) {
        console.log('Erro ao salvar growdever', error);
    }
};

export const selectGrowdeverByUuid = (uuidFilter : string): Growdever | undefined => {
    return growdevers.find(
        (growdever) => growdever.getUuid() === uuidFilter
    )
};

export const updateGrowdeverSkills = (growdever: Growdever) : Growdever => {
    const novaLista = growdevers.map(savedGrowdever => {
      if(savedGrowdever.getUuid() === growdever.getUuid()){
        return growdever;
      }
      return savedGrowdever;
    });
    growdevers = novaLista
    return growdever
  }

export const deleteByUuid = (uuidToRemove: string) => {
    const growdeversUptaded = growdevers.filter((growdever) => growdever.getUuid() !== uuidToRemove)
    const removed = growdevers.length > growdeversUptaded.length;
    growdevers = growdeversUptaded;
    return removed
};

export const updateGrowdeverByUuid = (uuidToUpdate : string, nameToUpdate : string) => {
    const growdeverToUpdate = growdevers.find((growdever) => growdever.getUuid() === uuidToUpdate)
    growdeverToUpdate?.setName(nameToUpdate)
    return growdeverToUpdate?.getName();
};

export const selectGrowdeversByFilter = (nameFilter?: string, statusFilter?: string) : Growdever[] => {
    const filteredGrowdever = growdevers.filter(
        (growdever) => {
            const nameMatches = nameFilter
                ? growdever.getName().toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0
                : true;
            const statusMatches = statusFilter 
                ? growdever.getStatus() === statusFilter.toUpperCase()
                : true;
            return nameMatches && statusMatches; // && duas condições verdadeiras, retorno true
        },
    )
    return filteredGrowdever;
} 