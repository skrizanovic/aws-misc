import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as SecretRds from '../lib/secret-rds-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SecretRds.SecretRdsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
