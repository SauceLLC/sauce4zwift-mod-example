import('/pages/src/fields.mjs').then(module => {
    module.fieldGroupNames['bike'] = 'Bike/Trainer';
    module.fields.push({
        group: 'bike',
        id: 'bike-gear',
        key: 'Gear',
        value: () => Math.random() * 22 + 1 | 0,
    });
});

if (electron.context.type === 'watching') {
    import('/pages/src/watching.mjs').then(module => {
        module.groupSpecs.bike = {
            title: 'Bike/Trainer',
            fields: [{
                id: 'bike-gear',
                longName: 'Virtual Gear',
                value: x => Math.random() * 22 + 1 | 0,
                key: 'Gear',
                label: 'gear',
            }],
        };
    });
}
