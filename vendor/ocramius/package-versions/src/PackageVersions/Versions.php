<?php

declare(strict_types=1);

namespace PackageVersions;

use OutOfBoundsException;

/**
 * This class is generated by ocramius/package-versions, specifically by
 * @see \PackageVersions\Installer
 *
 * This file is overwritten at every run of `composer install` or `composer update`.
 */
final class Versions
{
    public const ROOT_PACKAGE_NAME = 'laravel/laravel';
    /**
     * Array of all available composer packages.
     * Dont read this array from your calling code, but use the \PackageVersions\Versions::getVersion() method instead.
     *
     * @var array<string, string>
     * @internal
     */
    public const VERSIONS          = array (
  'codedge/laravel-fpdf' => '1.6.2@8b798103c9e3514be61bb152f6c9543d10a4420b',
  'defuse/php-encryption' => 'v2.2.1@0f407c43b953d571421e0020ba92082ed5fb7620',
  'dnoegel/php-xdg-base-dir' => 'v0.1.1@8f8a6e48c5ecb0f991c2fdcf5f154a47d85f9ffd',
  'doctrine/inflector' => '2.0.1@18b995743e7ec8b15fd6efc594f0fa3de4bfe6d7',
  'doctrine/lexer' => '1.2.0@5242d66dbeb21a30dd8a3e66bf7a73b66e05e1f6',
  'dragonmantank/cron-expression' => 'v2.3.0@72b6fbf76adb3cf5bc0db68559b33d41219aba27',
  'egulias/email-validator' => '2.1.17@ade6887fd9bd74177769645ab5c474824f8a418a',
  'fideloper/proxy' => '4.3.0@ec38ad69ee378a1eec04fb0e417a97cfaf7ed11a',
  'firebase/php-jwt' => 'v5.2.0@feb0e820b8436873675fd3aca04f3728eb2185cb',
  'guzzlehttp/guzzle' => '6.5.3@aab4ebd862aa7d04f01a4b51849d657db56d882e',
  'guzzlehttp/promises' => 'v1.3.1@a59da6cf61d80060647ff4d3eb2c03a2bc694646',
  'guzzlehttp/psr7' => '1.6.1@239400de7a173fe9901b9ac7c06497751f00727a',
  'laminas/laminas-diactoros' => '2.3.0@5ab185dba63ec655a2380c97711b09adc7061f89',
  'laminas/laminas-zendframework-bridge' => '1.0.3@bfbbdb6c998d50dbf69d2187cb78a5f1fa36e1e9',
  'laravel/framework' => 'v6.18.15@a1fa3ddc0bb5285cafa6844b443633f7627d75dc',
  'laravel/passport' => 'v8.5.0@6affa6ed600c5f8909385fbae7cf6f8af3db2d39',
  'laravel/tinker' => 'v2.4.0@cde90a7335a2130a4488beb68f4b2141869241db',
  'lcobucci/jwt' => '3.3.1@a11ec5f4b4d75d1fcd04e133dede4c317aac9e18',
  'league/commonmark' => '1.4.3@412639f7cfbc0b31ad2455b2fe965095f66ae505',
  'league/event' => '2.2.0@d2cc124cf9a3fab2bb4ff963307f60361ce4d119',
  'league/flysystem' => '1.0.69@7106f78428a344bc4f643c233a94e48795f10967',
  'league/oauth2-server' => '8.1.0@b53d324f774eb782250f7d8973811a33a75ecdef',
  'monolog/monolog' => '2.0.2@c861fcba2ca29404dc9e617eedd9eff4616986b8',
  'nesbot/carbon' => '2.34.2@3e87404329b8072295ea11d548b47a1eefe5a162',
  'nexmo/client' => '2.0.0@664082abac14f6ab9ceec9abaf2e00aeb7c17333',
  'nexmo/client-core' => '2.1.0@ef7e8a0715c93c5ddc7915e8a29f29331798bb52',
  'nexmo/laravel' => '2.2.0@57b62d985ae59d2f15f970883ea445b7fda56652',
  'nikic/php-parser' => 'v4.4.0@bd43ec7152eaaab3bd8c6d0aa95ceeb1df8ee120',
  'nyholm/psr7' => '1.2.1@55ff6b76573f5b242554c9775792bd59fb52e11c',
  'ocramius/package-versions' => '1.8.0@421679846270a5772534828013a93be709fb13df',
  'opis/closure' => '3.5.1@93ebc5712cdad8d5f489b500c59d122df2e53969',
  'paragonie/random_compat' => 'v9.99.99@84b4dfb120c6f9b4ff7b3685f9b8f1aa365a0c95',
  'php-http/guzzle6-adapter' => 'v2.0.1@6074a4b1f4d5c21061b70bab3b8ad484282fe31f',
  'php-http/httplug' => '2.1.0@72d2b129a48f0490d55b7f89be0d6aa0597ffb06',
  'php-http/message-factory' => 'v1.0.2@a478cb11f66a6ac48d8954216cfed9aa06a501a1',
  'php-http/promise' => 'v1.0.0@dc494cdc9d7160b9a09bd5573272195242ce7980',
  'phpoption/phpoption' => '1.7.3@4acfd6a4b33a509d8c88f50e5222f734b6aeebae',
  'phpseclib/phpseclib' => '2.0.27@34620af4df7d1988d8f0d7e91f6c8a3bf931d8dc',
  'psr/container' => '1.0.0@b7ce3b176482dbbc1245ebf52b181af44c2cf55f',
  'psr/http-client' => '1.0.0@496a823ef742b632934724bf769560c2a5c7c44e',
  'psr/http-factory' => '1.0.1@12ac7fcd07e5b077433f5f2bee95b3a771bf61be',
  'psr/http-message' => '1.0.1@f6561bf28d520154e4b0ec72be95418abe6d9363',
  'psr/log' => '1.1.3@0f73288fd15629204f9d42b7055f72dacbe811fc',
  'psr/simple-cache' => '1.0.1@408d5eafb83c57f6365a3ca330ff23aa4a5fa39b',
  'psy/psysh' => 'v0.10.4@a8aec1b2981ab66882a01cce36a49b6317dc3560',
  'ralouphie/getallheaders' => '3.0.3@120b605dfeb996808c31b6477290a714d356e822',
  'ramsey/uuid' => '3.9.3@7e1633a6964b48589b142d60542f9ed31bd37a92',
  'swiftmailer/swiftmailer' => 'v6.2.3@149cfdf118b169f7840bbe3ef0d4bc795d1780c9',
  'symfony/console' => 'v4.4.8@10bb3ee3c97308869d53b3e3d03f6ac23ff985f7',
  'symfony/css-selector' => 'v5.0.8@5f8d5271303dad260692ba73dfa21777d38e124e',
  'symfony/debug' => 'v4.4.8@346636d2cae417992ecfd761979b2ab98b339a45',
  'symfony/error-handler' => 'v4.4.8@7e9828fc98aa1cf27b422fe478a84f5b0abb7358',
  'symfony/event-dispatcher' => 'v4.4.8@abc8e3618bfdb55e44c8c6a00abd333f831bbfed',
  'symfony/event-dispatcher-contracts' => 'v1.1.7@c43ab685673fb6c8d84220c77897b1d6cdbe1d18',
  'symfony/finder' => 'v4.4.8@5729f943f9854c5781984ed4907bbb817735776b',
  'symfony/http-foundation' => 'v4.4.8@ec5bd254c223786f5fa2bb49a1e705c1b8e7cee2',
  'symfony/http-kernel' => 'v4.4.8@1799a6c01f0db5851f399151abdb5d6393fec277',
  'symfony/mime' => 'v5.0.8@5d6c81c39225a750f3f43bee15f03093fb9aaa0b',
  'symfony/polyfill-ctype' => 'v1.17.0@e94c8b1bbe2bc77507a1056cdb06451c75b427f9',
  'symfony/polyfill-iconv' => 'v1.17.0@c4de7601eefbf25f9d47190abe07f79fe0a27424',
  'symfony/polyfill-intl-idn' => 'v1.17.0@3bff59ea7047e925be6b7f2059d60af31bb46d6a',
  'symfony/polyfill-mbstring' => 'v1.17.0@fa79b11539418b02fc5e1897267673ba2c19419c',
  'symfony/polyfill-php72' => 'v1.17.0@f048e612a3905f34931127360bdd2def19a5e582',
  'symfony/polyfill-php73' => 'v1.17.0@a760d8964ff79ab9bf057613a5808284ec852ccc',
  'symfony/process' => 'v4.4.8@4b6a9a4013baa65d409153cbb5a895bf093dc7f4',
  'symfony/psr-http-message-bridge' => 'v2.0.0@ce709cd9c90872c08c2427b45739d5f3c781ab4f',
  'symfony/routing' => 'v4.4.8@67b4e1f99c050cbc310b8f3d0dbdc4b0212c052c',
  'symfony/service-contracts' => 'v2.0.1@144c5e51266b281231e947b51223ba14acf1a749',
  'symfony/translation' => 'v4.4.8@8272bbd2b7e220ef812eba2a2b30068a5c64b191',
  'symfony/translation-contracts' => 'v2.0.1@8cc682ac458d75557203b2f2f14b0b92e1c744ed',
  'symfony/var-dumper' => 'v4.4.8@c587e04ce5d1aa62d534a038f574d9a709e814cf',
  'tijsverkoyen/css-to-inline-styles' => '2.2.2@dda2ee426acd6d801d5b7fd1001cde9b5f790e15',
  'vlucas/phpdotenv' => 'v3.6.4@10d3f853fdf1f3a6b3c7ea0c4620d2f699713db5',
  'barryvdh/laravel-ide-helper' => 'v2.7.0@5f677edc14bdcfdcac36633e6eea71b2728a4dbc',
  'barryvdh/reflection-docblock' => 'v2.0.6@6b69015d83d3daf9004a71a89f26e27d27ef6a16',
  'composer/ca-bundle' => '1.2.7@95c63ab2117a72f48f5a55da9740a3273d45b7fd',
  'composer/composer' => '1.10.6@be81b9c4735362c26876bdbfd3b5bc7e7f711c88',
  'composer/semver' => '1.5.1@c6bea70230ef4dd483e6bbcab6005f682ed3a8de',
  'composer/spdx-licenses' => '1.5.3@0c3e51e1880ca149682332770e25977c70cf9dae',
  'composer/xdebug-handler' => '1.4.1@1ab9842d69e64fb3a01be6b656501032d1b78cb7',
  'doctrine/cache' => '1.10.0@382e7f4db9a12dc6c19431743a2b096041bcdd62',
  'doctrine/dbal' => '2.10.2@aab745e7b6b2de3b47019da81e7225e14dcfdac8',
  'doctrine/event-manager' => '1.1.0@629572819973f13486371cb611386eb17851e85c',
  'doctrine/instantiator' => '1.3.0@ae466f726242e637cebdd526a7d991b9433bacf1',
  'facade/flare-client-php' => '1.3.2@db1e03426e7f9472c9ecd1092aff00f56aa6c004',
  'facade/ignition' => '1.16.1@af05ac5ee8587395d7474ec0681c08776a2cb09d',
  'facade/ignition-contracts' => '1.0.0@f445db0fb86f48e205787b2592840dd9c80ded28',
  'filp/whoops' => '2.7.2@17d0d3f266c8f925ebd035cd36f83cf802b47d4a',
  'fzaninotto/faker' => 'v1.9.1@fc10d778e4b84d5bd315dad194661e091d307c6f',
  'hamcrest/hamcrest-php' => 'v2.0.0@776503d3a8e85d4f9a1148614f95b7a608b046ad',
  'jakub-onderka/php-console-color' => 'v0.2@d5deaecff52a0d61ccb613bb3804088da0307191',
  'jakub-onderka/php-console-highlighter' => 'v0.4@9f7a229a69d52506914b4bc61bfdb199d90c5547',
  'justinrainbow/json-schema' => '5.2.9@44c6787311242a979fa15c704327c20e7221a0e4',
  'martinlindhe/laravel-vue-i18n-generator' => '0.1.46@ddc52890f0204dff64d25e30c3473332904c6138',
  'mockery/mockery' => '1.4.0@6c6a7c533469873deacf998237e7649fc6b36223',
  'myclabs/deep-copy' => '1.9.5@b2c28789e80a97badd14145fda39b545d83ca3ef',
  'nunomaduro/collision' => 'v3.0.1@af42d339fe2742295a54f6fdd42aaa6f8c4aca68',
  'phar-io/manifest' => '1.0.3@7761fcacf03b4d4f16e7ccb606d4879ca431fcf4',
  'phar-io/version' => '2.0.1@45a2ec53a73c70ce41d55cedef9063630abaf1b6',
  'phpdocumentor/reflection-common' => '2.1.0@6568f4687e5b41b054365f9ae03fcb1ed5f2069b',
  'phpdocumentor/reflection-docblock' => '5.1.0@cd72d394ca794d3466a3b2fc09d5a6c1dc86b47e',
  'phpdocumentor/type-resolver' => '1.1.0@7462d5f123dfc080dfdf26897032a6513644fc95',
  'phpspec/prophecy' => 'v1.10.3@451c3cd1418cf640de218914901e51b064abb093',
  'phpunit/php-code-coverage' => '7.0.10@f1884187926fbb755a9aaf0b3836ad3165b478bf',
  'phpunit/php-file-iterator' => '2.0.2@050bedf145a257b1ff02746c31894800e5122946',
  'phpunit/php-text-template' => '1.2.1@31f8b717e51d9a2afca6c9f046f5d69fc27c8686',
  'phpunit/php-timer' => '2.1.2@1038454804406b0b5f5f520358e78c1c2f71501e',
  'phpunit/php-token-stream' => '3.1.1@995192df77f63a59e47f025390d2d1fdf8f425ff',
  'phpunit/phpunit' => '8.5.4@8474e22d7d642f665084ba5ec780626cbd1efd23',
  'scrivo/highlight.php' => 'v9.18.1.1@52fc21c99fd888e33aed4879e55a3646f8d40558',
  'sebastian/code-unit-reverse-lookup' => '1.0.1@4419fcdb5eabb9caa61a27c7a1db532a6b55dd18',
  'sebastian/comparator' => '3.0.2@5de4fc177adf9bce8df98d8d141a7559d7ccf6da',
  'sebastian/diff' => '3.0.2@720fcc7e9b5cf384ea68d9d930d480907a0c1a29',
  'sebastian/environment' => '4.2.3@464c90d7bdf5ad4e8a6aea15c091fec0603d4368',
  'sebastian/exporter' => '3.1.2@68609e1261d215ea5b21b7987539cbfbe156ec3e',
  'sebastian/global-state' => '3.0.0@edf8a461cf1d4005f19fb0b6b8b95a9f7fa0adc4',
  'sebastian/object-enumerator' => '3.0.3@7cfd9e65d11ffb5af41198476395774d4c8a84c5',
  'sebastian/object-reflector' => '1.1.1@773f97c67f28de00d397be301821b06708fca0be',
  'sebastian/recursion-context' => '3.0.0@5b0cd723502bac3b006cbf3dbf7a1e3fcefe4fa8',
  'sebastian/resource-operations' => '2.0.1@4d7a795d35b889bf80a0cc04e08d77cedfa917a9',
  'sebastian/type' => '1.1.3@3aaaa15fa71d27650d62a948be022fe3b48541a3',
  'sebastian/version' => '2.0.1@99732be0ddb3361e16ad77b68ba41efc8e979019',
  'seld/jsonlint' => '1.8.0@ff2aa5420bfbc296cf6a0bc785fa5b35736de7c1',
  'seld/phar-utils' => '1.1.0@8800503d56b9867d43d9c303b9cbcc26016e82f0',
  'symfony/filesystem' => 'v5.0.8@7cd0dafc4353a0f62e307df90b48466379c8cc91',
  'theseer/tokenizer' => '1.1.3@11336f6f84e16a720dae9d8e6ed5019efa85a0f9',
  'webmozart/assert' => '1.8.0@ab2cb0b3b559010b75981b1bdce728da3ee90ad6',
  'laravel/laravel' => 'dev-master@a953257344715b5868b1c6327e3b7b9dd6af7359',
);

    private function __construct()
    {
    }

    /**
     * @throws OutOfBoundsException If a version cannot be located.
     *
     * @psalm-param key-of<self::VERSIONS> $packageName
     * @psalm-pure
     */
    public static function getVersion(string $packageName) : string
    {
        if (isset(self::VERSIONS[$packageName])) {
            return self::VERSIONS[$packageName];
        }

        throw new OutOfBoundsException(
            'Required package "' . $packageName . '" is not installed: check your ./vendor/composer/installed.json and/or ./composer.lock files'
        );
    }
}
