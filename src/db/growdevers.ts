import { Growdever } from "../models/growdever";

let growdevers : Growdever[] = [
    new Growdever('Yuri Bigon', '123456789123', 'yuri-bigon', 'minhasenha123'),
    new Growdever('Giovanna Lopes', '123456789123', 'giovanna-lopes', 'minhasenha123'),
    new Growdever('Sol LB','123456789123', 'sol-lb', 'minhasenha123'),
    new Growdever('Pipoca LB','123456789123', 'pipoca-lb', 'minhasenha123'),
    new Growdever('Arthur Pessoa', '123456789123', 'arthur-pessoa', 'minhasenha123'),
    new Growdever('Jonathan Spinelli','123456789123', 'jonathan-spinelli', 'minhasenha123'),
]

export const selectAllGrowdevers = () => growdevers;

export const insertGrowdever = (growdever: Growdever) => {
    try {
        growdevers.push(growdever);
        return growdever.getUuid();
    } catch (error) {
        throw new Error('Erro ao salvar growdever');
    }
};

export const selectGrowdeverByUuid = (uuidFilter : string): Growdever | undefined => {
    return growdevers.find(
        (growdever) => growdever.getUuid() === uuidFilter
    )
};

export const selectGrowdeverByUsername = (username : string): Growdever | undefined => {
    return growdevers.find(
        (growdever) => growdever.getUsername() === username
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