from typer.testing import CliRunner
from strudel.main import app

runner = CliRunner()


def test_app():
    result = runner.invoke(app, ["--help"])
    assert result.exit_code == 0
    assert "create-app" in result.stdout
    assert "add-taskflow" in result.stdout