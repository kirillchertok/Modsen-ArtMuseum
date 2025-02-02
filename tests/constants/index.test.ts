import { DETAILED_FIELDS_TO_FETCH,FIELDS_TO_FETCH } from '../../src/constants/artsFetch';

describe('fieldsToFetch', () => {
    it('should export FIELDS_TO_FETCH with the correct value', () => {
        expect(FIELDS_TO_FETCH).toBe('id,title,image_id,is_public_domain,artist_title');
    });

    it('should export DETAILED_FIELDS_TO_FETCH with the correct value', () => {
        expect(DETAILED_FIELDS_TO_FETCH).toBe(
            'id,title,date_display,artist_title,dimensions,credit_line,image_id,is_public_domain,artist_display,department_title'
        );
    });
});