<h2><?= "Mise à Jour" ?></h2>
<?= session()->getFlashdata('error') ?>
<?= validation_list_errors() ?>

<form action="<?= base_url("/personnelUpdate/$id") ?>" method="post">
    <?= csrf_field() ?>
    <label for="Nom">Nom:</label>
    <input type="input" name="Nom" id="Nom" value="<?= service('request')->getPost('Nom') ?>">
    <br>
    <label for="Prenom">Prenom:</label>
    <textarea name="Prenom" id="Prenom" cols="45" rows="4"><?= service('request')->getPost('Prenom') ?></textarea>
    <br>
    <input type="submit" name="submit" value="Mettre à jour">
</form>