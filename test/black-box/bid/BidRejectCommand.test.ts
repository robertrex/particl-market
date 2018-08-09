// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE

import { rpc, api } from '../lib/api';
import { BlackBoxTestUtil } from '../lib/BlackBoxTestUtil';
import { CreatableModel } from '../../../src/api/enums/CreatableModel';
import { Commands } from '../../../src/api/commands/CommandEnumType';

describe('BidRejectCommand', () => {
    const testUtil = new BlackBoxTestUtil();

    const method =  Commands.BID_ROOT.commandName;
    const subMethod =  Commands.BID_REJECT.commandName;

    beforeAll(async () => {
        await testUtil.cleanDb();
    });

    test('Should reject a bid by RPC', async () => {
        const listingItem = await testUtil.generateData(CreatableModel.LISTINGITEM, 1);
        const res: any = await rpc(method, [subMethod, listingItem[0].hash]);
        res.expectJson();

        // TODO: Need to implements after broadcast functionality get done

        // res.expectStatusCode(200);
        // const result: any = res.getBody()['result'];
    });

});
