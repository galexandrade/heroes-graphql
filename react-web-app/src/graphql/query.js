import { gql } from 'apollo-boost';

export const MOVIES_QUERY = gql`
    {
        getMovies {
            name
            link
            villain {
                name
                photo
            }
            heroes {
                name
                photo
            }
        }
    }
`;
