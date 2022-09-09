# bilibili_api.bangumi

from bilibili_api import bangumi
from .common import get_credential

b = bangumi.Bangumi(28231846, get_credential())
ep = bangumi.Episode(374717, get_credential())

async def test_a_Bangumi_get_meta():
    return await b.get_meta()

async def test_b_Bangumi_get_short_comment_list():
    return await b.get_short_comment_list()

async def test_c_Bangumi_get_long_comment_list():
    return await b.get_long_comment_list()

async def test_d_Bangumi_get_episode_list():
    return await b.get_episode_list()

async def test_e_Bangumi_get_stat():
    return await b.get_stat()

async def test_f_Episode_get_episode_info():
    return await ep.get_episode_info()

async def test_g_Bangumi_get_overview():
    return await b.get_overview()
