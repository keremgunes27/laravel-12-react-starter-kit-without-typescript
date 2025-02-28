import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import HeadingSmall from '@/components/heading-small';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

const breadcrumbs = [
    {
        title: 'Görünüm ayarları',
        href: '/settings/appearance',
    },
];

export default function Appearance() {
    return (<AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Görünüm ayarları"/>

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Görünüm ayarları" description="Hesabınızın görünüm ayarlarını güncelleyin"/>
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </AppLayout>);
}

