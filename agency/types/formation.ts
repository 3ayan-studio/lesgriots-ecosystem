export interface Formation {
    title: string;
    description: string;
    lieu: string;
    tarif: number;
    duree: number;
    contact: string;
    pdf: string
    inscription: string
    methodologie: Methodologie;
    objectifs: Objectifs;
    programme: Jour[];
    participants: Participants;
    faq: QA[];
}

export interface QA {
    question: string;
    reponse: string;
    list?: string[];
    steps?: string[];
}
export interface Methodologie {
    intro: string;
    processus: string[];
    conclusion: string;
}

export interface Objectifs {
    principal: string;
    pedagogiques: string[];
}

export interface Jour {
    titre: string,
    chapitres: Chapitre[]
}

export interface Chapitre {
    titre: string;
    modules: Module[];
}

export interface Module {
    titre: string;
    description: string;
}

export interface Participants {
    min: number;
    max: number;
}
