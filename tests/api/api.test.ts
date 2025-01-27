import $api, { API_URL } from "../../api/api";
import { DETAILED_FIELDS_TO_FETCH, FIELDS_TO_FETCH } from "../../constants/artsFetch";
import { ARTS_PER_PAGE } from "../../constants/pagination";
import Arts from "../../services/arts";

jest.mock("../../api/api", () => ({
    __esModule: true,
    default: {
        get: jest.fn(),
    },
    API_URL: "https://api.artic.edu/api/v1/artworks",
}));

describe("Arts class API methods", () => {
    const mockedApi = $api as jest.Mocked<typeof $api>;

    it("should fetch arts with correct URL and params", async () => {
        const page = 1;
        const query = "test";
        const responseData = { data: { arts: [] } };

        mockedApi.get.mockResolvedValueOnce(responseData);

        const response = await Arts.getArts(page, query);

        expect(mockedApi.get).toHaveBeenCalledWith(
            `${API_URL}/search?q=${query}&page=${page}&limit=${ARTS_PER_PAGE}&fields=${FIELDS_TO_FETCH}`
        );
        expect(response).toEqual(responseData);
    });

    it("should fetch arts without query", async () => {
        const page = 1;
        const responseData = { data: { arts: [] } };

        mockedApi.get.mockResolvedValueOnce(responseData);

        const response = await Arts.getArts(page);

        expect(mockedApi.get).toHaveBeenCalledWith(
            `${API_URL}?page=${page}&limit=${ARTS_PER_PAGE}&fields=${FIELDS_TO_FETCH}`
        );
        expect(response).toEqual(responseData);
    });

    it("should fetch details for an art piece", async () => {
        const id = 123;
        const responseData = { data: { id } };

        mockedApi.get.mockResolvedValueOnce(responseData);

        const response = await Arts.getDetails(id);

        expect(mockedApi.get).toHaveBeenCalledWith(
            `${API_URL}/${id}?fields=${DETAILED_FIELDS_TO_FETCH}`
        );
        expect(response).toEqual(responseData);
    });

    it("should fetch favorites by IDs", async () => {
        const ids = "1,2,3";
        const responseData = { data: { ids } };

        mockedApi.get.mockResolvedValueOnce(responseData);

        const response = await Arts.getFavorites(ids);

        expect(mockedApi.get).toHaveBeenCalledWith(
            `${API_URL}?ids=${ids}&fields=${FIELDS_TO_FETCH}`
        );
        expect(response).toEqual(responseData);
    });
});
