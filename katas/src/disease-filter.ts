type Note = {
    id: number;
    content: "public" | "private";
};

export type Case = {
    id: number;
    patientName: string;
    diagnosisId: number;
    diagnosisName: string;
    publicNotes: Note[];
    privateNotes: Note[];
};

export type Diagnosis = {
    id: number;
    name: string;
    location: string;
    system: string;
    origin: string;
    specie: string;
};

export class DiseaseFilter {
    private filters: string[] = [];
    constructor(private readonly cases: Case[], private readonly diagnoses: Diagnosis[]) {}

    static create(cases: Case[], diagnoses: Diagnosis[]) {
        return new DiseaseFilter(cases, diagnoses);
    }

    addFilter(location: string) {
        this.filters.push(location);
    }

    /*
        Original version
        
        get casesFiltered(): Case[] {
            const fromDiagnosisToCasesFiltered = (d: Diagnosis) => this.cases.filter((c) => c.diagnosisId === d.id);
            const diagnosesFilteredBy = (location: string) => this.diagnoses.filter((d) => d.location === location);
            const fromFiltersToCases = (f: string) => diagnosesFilteredBy(f).flatMap(fromDiagnosisToCasesFiltered);
            return this.filters.flatMap(fromFiltersToCases);
        }
    */

    // Version with intermediate variables for better understanding
    get filteredCases(): Case[] {
        const filterCasesFromDiagnosis = (d: Diagnosis) => this.cases.filter((c) => c.diagnosisId === d.id);
        const filterDiagnosisFromLocation = (location: string) => this.diagnoses.filter((d) => d.location === location);

        const casesArrays: Case[][] = this.filters.map((f: string) => {
            const filteredDiagnoses = filterDiagnosisFromLocation(f);
            const casesArraysForFilter: Case[][] = filteredDiagnoses.map(filterCasesFromDiagnosis);
            return casesArraysForFilter.reduce((acc, curr) => acc.concat(curr), []);
        });

        return casesArrays.reduce((acc, curr) => acc.concat(curr), []);
    }
}
