import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const MISSIONS_QUERY = gql`
    {
        missions {
            name
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
