import { Case, Diagnosis, DiseaseFilter } from "../src/disease-filter";

describe("Disease filter with factories", () => {
    it("filters cases when several diagnosis filters are applied together", () => {
        const searchCriteria1 = "Brain";
        const searchCriteria2 = "Upper Respiratory Tracts";
        const discardedLocation = "Irrelevant";

        const diagnoses = [
            createDiagnosisFrom({ id: 2 }, { location: searchCriteria1 }),
            createDiagnosisFrom({ id: 1 }, { location: searchCriteria2 }),
            createDiagnosisFrom({ id: 3 }, { location: discardedLocation }),
        ];
        const cases = [
            createCasesFrom({ diagnosisId: 1 }, { patientName: "Julian" }),
            createCasesFrom({ diagnosisId: 2 }, { patientName: "Maria" }),
            createCasesFrom({ diagnosisId: 3 }, { patientName: "Another" }),
        ];

        const diseaseFilter = DiseaseFilter.create(cases, diagnoses);
        diseaseFilter.addFilter(searchCriteria1);
        diseaseFilter.addFilter(searchCriteria2);

        const result = diseaseFilter.filteredCases;

        expect(result.length).toBe(2);
        expect(result[1].patientName).toBe("Julian");
        expect(result[0].patientName).toBe("Maria");
    });
});

function createDiagnosisFrom(...options: Partial<Diagnosis>[]): Diagnosis {
    const defaults = {
        name: "Irrelevant-name",
        system: "Irrelevant-system",
        origin: "Irrelevant-origin",
        specie: "Irrelevant-specie",
    };

    return Object.assign({}, defaults, ...options);
}

function createCasesFrom(...options: Partial<Case>[]): Case {
    const defaults = {
        id: 0,
        diagnosisName: "irrelevant-diagnosisName",
        publicNotes: [],
        privateNotes: [],
    } as unknown as Case;

    return Object.assign({}, defaults, ...options);
}
