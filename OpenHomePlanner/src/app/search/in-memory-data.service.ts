import { InMemoryDbService } from 'angular-in-memory-web-api';
import { createTestRegions, createTestProperties } from './test-data';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        return {
            regions: createTestRegions(),
            properties: createTestProperties()
        }
    }
}