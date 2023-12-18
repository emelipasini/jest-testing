import { Case, Diagnosis, DiseaseFilter } from "../src/disease-filter";

describe("Disease filter with builders", () => {
    it("filters cases when several diagnosis filters are applied together", () => {
        const searchCriteria1 = "Brain";
        const searchCriteria2 = "Upper Respiratory Tracts";
        const discardedLocation = "Irrelevant";

        const fixtures = casesWithDiagnoses()
            .havingDiagnosisWithLocationAndCaseWithName(searchCriteria2, "Julian")
            .havingDiagnosisWithLocationAndCaseWithName(searchCriteria1, "Maria")
            .havingDiagnosisWithLocationAndCaseWithName(discardedLocation, "Another")
            .build();

        const diseaseFilter = DiseaseFilter.create(fixtures.cases(), fixtures.diagnoses());
        diseaseFilter.addFilter(searchCriteria1);
        diseaseFilter.addFilter(searchCriteria2);

        const result = diseaseFilter.filteredCases;

        expect(result.length).toBe(2);
        expect(result[1].patientName).toBe("Julian");
        expect(result[0].patientName).toBe("Maria");
    });
});

function casesWithDiagnoses() {
    let id = 0;
    const diagnoses: Diagnosis[] = [];
    const cases: Case[] = [];

    const add = (location: string, patientName: string) => {
        ++id;
        const aDiagnosis = createDiagnosisFrom(id, location);
        const aCase = createCasesFrom(aDiagnosis, patientName, id);
        diagnoses.push(aDiagnosis);
        cases.push(aCase);
    };

    const builder = {
        havingDiagnosisWithLocationAndCaseWithName: (locationName: string, patientName: string) => {
            add(locationName, patientName);
            return builder;
        },
        build: () => ({
            cases: () => cases,
            diagnoses: () => diagnoses,
        }),
    };

    return builder;
}

function createDiagnosisFrom(id: number, location: string): Diagnosis {
    return {
        id: id,
        location: location,
        name: "Irrelevant-name",
        system: "Irrelevant-system",
        origin: "Irrelevant-origin",
        specie: "Irrelevant-specie",
    };
}

function createCasesFrom(diagnosis: Diagnosis, patientName: string, id = 0): Case {
    return {
        id: id,
        patientName: patientName,
        diagnosisId: diagnosis.id,
        diagnosisName: diagnosis.name,
        publicNotes: [],
        privateNotes: [],
    };
}
